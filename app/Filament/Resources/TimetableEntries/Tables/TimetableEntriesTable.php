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
                    
                TextColumn::make('time')
                    ->searchable()
                    ->sortable()
                    ->weight('medium'),
                    
                TextColumn::make('batch_label')
                    ->label('Batch')
                    ->searchable()
                    ->sortable()
                    ->limit(20)
                    ->tooltip(function (TextColumn $column): ?string {
                        $state = $column->getState();
                        if (strlen($state) > 20) {
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
                        'BSc CSIT' => 'BSc CSIT',
                        'BCA' => 'BCA',
                        'BIT' => 'BIT',
                        'BSc Physics' => 'BSc Physics',
                        'BSc Maths' => 'BSc Maths',
                    ])
                    ->searchable(),
                    
                SelectFilter::make('level')
                    ->options([
                        '1' => 'Level 1',
                        '2' => 'Level 2',
                        '3' => 'Level 3',
                        '4' => 'Level 4',
                        '5' => 'Level 5',
                        '6' => 'Level 6',
                        '7' => 'Level 7',
                        '8' => 'Level 8',
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
                        'Monday' => 'Monday',
                        'Tuesday' => 'Tuesday',
                        'Wednesday' => 'Wednesday',
                        'Thursday' => 'Thursday',
                        'Friday' => 'Friday',
                        'Saturday' => 'Saturday',
                        'Sunday' => 'Sunday',
                        'Mon/Wed/Fri' => 'Mon/Wed/Fri',
                        'Tue/Thu' => 'Tue/Thu',
                        'Mon-Fri' => 'Monday - Friday',
                    ]),
                    
                TernaryFilter::make('is_visible')
                    ->label('Visibility')
                    ->trueLabel('Visible Only')
                    ->falseLabel('Hidden Only')
                    ->placeholder('All Entries'),
                    
                // TrashedFilter::make()
                //     ->label('Deleted Records'),
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