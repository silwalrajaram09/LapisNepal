<?php

namespace App\Filament\Resources\Courses\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Tables\Filters\TrashedFilter;

class CoursesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                
                TextColumn::make('slug')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                
                BadgeColumn::make('category')
                    ->colors([
                        'primary' => 'language',
                        'warning' => 'visa',
                        'success' => 'internship',
                    ])
                    ->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->sortable(),
                
                TextColumn::make('chips')
                    ->label('Tags')
                    ->formatStateUsing(function ($state) {
                        if (!$state) return '-';
                        $tags = is_array($state) ? array_column($state, 'tag') : [];
                        return implode(', ', array_slice($tags, 0, 3));
                    })
                    ->toggleable(),
                
                IconColumn::make('is_published')
                    ->boolean()
                    ->sortable(),
                
                TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable()
                    ->toggleable(),
                
                TextColumn::make('created_at')
                    ->dateTime('M j, Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                
                TextColumn::make('updated_at')
                    ->dateTime('M j, Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'language' => 'Language',
                        'visa' => 'Visa',
                        'internship' => 'Internship',
                    ]),
                
                TernaryFilter::make('is_published')
                    ->label('Published status')
                    ->placeholder('All courses')
                    ->trueLabel('Published only')
                    ->falseLabel('Drafts only'),
                
                //TrashedFilter::make(),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    // ForceDeleteBulkAction::make(),
                    // RestoreBulkAction::make(),
                ]),
            ]);
    }
}