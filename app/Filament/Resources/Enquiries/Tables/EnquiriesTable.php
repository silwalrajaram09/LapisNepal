<?php

namespace App\Filament\Resources\Enquiries\Tables;

use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\Action; // ✅ IMPORTANT (Filament v5 correct)

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

class EnquiriesTable
{
    public static function configure(Table $table): Table
    {
        return $table

           
            ->contentGrid([
                'md' => 1,
                'xl' => 1,
            ])

           
            ->columns([

                Split::make([

                    // LEFT (USER INFO)
                    Stack::make([
                        TextColumn::make('name')
                            ->weight(fn ($record) => $record->status === 'new' ? 'bold' : 'medium')
                            ->color(fn ($record) => $record->status === 'new' ? 'primary' : 'gray')
                            ->searchable()
                            ->sortable(),

                        TextColumn::make('email')
                            ->icon('heroicon-m-envelope')
                            ->color('gray')
                            ->size('xs'),

                        TextColumn::make('phone')
                            ->icon('heroicon-m-phone')
                            ->color('gray')
                            ->size('xs'),
                    ])
                        ->space(1)
                        ->grow(false)
                        ->extraAttributes(['class' => 'w-48']),

                    // MIDDLE (MESSAGE)
                    Stack::make([
                        TextColumn::make('programme')
                            ->formatStateUsing(fn ($state) => "Interest: " . ucfirst($state))
                            ->weight('medium'),

                        TextColumn::make('message')
                            ->limit(100)
                            ->color('gray')
                            ->size('sm'),
                    ])
                        ->space(1)
                        ->grow(true),

                    // RIGHT (STATUS + TIME)
                    Stack::make([
                        TextColumn::make('created_at')
                            ->dateTime('M j, g:i a')
                            ->size('xs')
                            ->color(fn ($record) => $record->status === 'new' ? 'primary' : 'gray')
                            ->alignEnd(),

                        TextColumn::make('status')
                            ->badge()
                            ->colors([
                                'warning' => 'new',
                                'info' => 'read',
                                'success' => 'replied',
                            ])
                            ->alignEnd()
                            ->formatStateUsing(fn ($state) => ucfirst($state)),
                    ])
                        ->space(2)
                        ->grow(false),

                ])->from('md'),
            ])

         
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'new' => 'New',
                        'read' => 'Read',
                        'replied' => 'Replied',
                    ]),
            ])

            
            ->recordActions([

                // VIEW (SLIDE OVER)
                Action::make('view')
                    ->label('View')
                    ->icon('heroicon-m-eye')
                    ->slideOver()
                    ->modalWidth('md')
                    ->form([
                        TextInput::make('name')->disabled(),
                        TextInput::make('email')->disabled(),
                        TextInput::make('phone')->disabled(),
                        TextInput::make('programme')->disabled(),

                        Textarea::make('message')
                            ->disabled()
                            ->rows(6)
                            ->columnSpanFull(),
                    ])
                    ->action(function ($record) {
                        if ($record->status === 'new') {
                            $record->update(['status' => 'read']);
                        }
                    }),

                // MARK REPLIED
                Action::make('mark_replied')
                    ->label('Mark Replied')
                    ->icon('heroicon-m-check-circle')
                    ->color('success')
                    ->action(fn ($record) => $record->update(['status' => 'replied']))
                    ->visible(fn ($record) => $record->status !== 'replied'),

                // EDIT
                EditAction::make(),

                // DELETE
                DeleteAction::make(),
            ])

           
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),

                    BulkAction::make('mark_read')
                        ->label('Mark as Read')
                        ->icon('heroicon-m-envelope-open')
                        ->action(fn ($records) => $records->each->update(['status' => 'read'])),
                ]),
            ])

            ->defaultSort('created_at', 'desc')

            // Disable row click
            ->recordUrl(null);
    }
}