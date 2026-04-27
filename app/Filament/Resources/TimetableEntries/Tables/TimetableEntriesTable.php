<?php

namespace App\Filament\Resources\TimetableEntries\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
// use Filament\Tables\Actions\BulkActionGroup;
// use Filament\Tables\Actions\DeleteBulkAction;
// use Filament\Tables\Actions\EditAction;
// use Filament\Tables\Actions\ForceDeleteBulkAction;
// use Filament\Tables\Actions\RestoreBulkAction;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;

class TimetableEntriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('programme')
                    ->searchable()
                    ->sortable()
                    ->badge()
                    ->color('primary')
                    ->weight('bold'),
                    
                TextColumn::make('level')
                    ->searchable()
                    ->sortable()
                    ->badge()
                    ->color('success'),
                    
                TextColumn::make('days')
                    ->label('Day(s)')
                    ->searchable()
                    ->sortable()
                    ->weight('medium'),
                    
                TextColumn::make('start_time')
                    ->label('Start')
                    ->time('H:i')
                    ->sortable(),

                TextColumn::make('end_time')
                    ->label('End')
                    ->time('H:i')
                    ->sortable(),
                    
                TextColumn::make('batch_label')
                    ->label('Batch')
                    ->searchable()
                    ->sortable()
                    ->limit(20)
                    ->tooltip(function (TextColumn $column): ?string {
                        $state = $column->getState();
                        if (strlen($state ?? '') > 20) {
                            return $state;
                        }
                        return null;
                    }),
                    
                TextColumn::make('instructor')
                    ->searchable()
                    ->sortable()
                    ->weight('medium'),
                    
                TextColumn::make('status')
                    ->badge()
                    ->colors([
                        'success' => 'open',
                        'warning' => 'filling',
                        'danger' => 'full',
                    ])
                    ->formatStateUsing(fn (string $state): string => ucfirst($state))
                    ->sortable(),
                    
                IconColumn::make('is_visible')
                    ->label('Visible')
                    ->boolean()
                    ->sortable(),
                    
                TextColumn::make('created_at')
                    ->dateTime('M d, Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                    
                TextColumn::make('updated_at')
                    ->dateTime('M d, Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('programme')
                    ->options([
                        'japanese' => 'Japanese Language',
                        'ssw' => 'SSW Curriculum',
                        'titp' => 'TITP Curriculum',
                        'internship' => 'Internship',
                    ])
                    ->searchable(),
                    
                SelectFilter::make('level')
                    ->options([
                        'N5 foundation' => 'N5 Foundation',
                        'N4 elementary' => 'N4 Elementary',
                        'N3 intermediate' => 'N3 Intermediate',
                        'N2 advanced' => 'N2 Advanced',
                    ])
                    ->searchable(),
                    
                SelectFilter::make('status')
                    ->options([
                        'open' => 'Open',
                        'filling' => 'Filling',
                        'full' => 'Full',
                    ]),
                    
                SelectFilter::make('days')
                    ->label('Day(s)')
                    ->options([
                        'sun-fri' => 'Sunday – Friday',
                        'mon-fri' => 'Monday – Friday',
                        'mwf' => 'Mon / Wed / Fri',
                        'tth' => 'Tue / Thu',
                        'weekend' => 'Saturday – Sunday',
                    ]),
                    
                TernaryFilter::make('is_visible')
                    ->label('Visibility')
                    ->trueLabel('Visible Only')
                    ->falseLabel('Hidden Only')
                    ->placeholder('All Entries'),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
}