<?php

namespace App\Filament\Resources\Staff\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;

class StaffTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('photo')
                    ->label('Photo')
                    ->circular()
                    ->width(40)
                    ->imageHeight(40)
                    ->defaultImageUrl(function ($record) {
                        return 'https://ui-avatars.com/api/?name=' . urlencode($record->name) . '&background=0D8F81&color=fff&size=40';
                    }),
                
                TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                
                TextColumn::make('initials')
                    ->label('Initials')
                    ->badge()
                    ->color('primary')
                    ->sortable(),
                
                TextColumn::make('role')
                    ->label('Role')
                    ->searchable()
                    ->sortable()
                    ->limit(30)
                    ->tooltip(function (TextColumn $column): ?string {
                        $state = $column->getState();
                        if (strlen($state) <= 30) return null;
                        return $state;
                    }),
                
                TextColumn::make('location')
                    ->label('Location')
                    ->badge()
                    ->color(fn (string $state): string => 
                        $state === 'Nepal' ? 'success' : 'info'
                    )
                    ->sortable(),
                
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean()
                    ->sortable(),
                
                TextColumn::make('sort_order')
                    ->label('Order')
                    ->numeric()
                    ->sortable()
                    ->toggleable(),
                
                TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime('M j, Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort_order', 'asc')
            ->filters([
                SelectFilter::make('location')
                    ->options([
                        'Nepal' => 'Nepal',
                        'Japan' => 'Japan',
                    ])
                    ->label('Location'),
                
                TernaryFilter::make('is_active')
                    ->label('Active Status')
                    ->placeholder('All Staff')
                    ->trueLabel('Active Only')
                    ->falseLabel('Inactive Only'),
                
                //TrashedFilter::make(),
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}