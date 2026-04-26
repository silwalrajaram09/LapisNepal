<?php

namespace App\Filament\Resources\Staff\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
//use Filament\Forms\Components\TextEntry;
//se Filament\Schemas\Components\ImageEntry;
//use Filament\Schemas\Components\BooleanEntry;
use Filament\Forms\Components\FileUpload;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\BadgeEntry;
use Filament\Infolists\Components\BooleanEntry;
use Filament\Infolists\Components\ImageEntry;


class StaffInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Staff Information')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextEntry::make('name')
                                    ->label('Full Name')
                                    ->weight('bold'),

                                TextEntry::make('initials')
                                    ->label('Initials')
                                    ->badge()
                                    ->color('primary'),

                                TextEntry::make('role')
                                    ->label('Role/Position'),

                                TextEntry::make('location')
                                    ->label('Location')
                                    ->badge()
                                    ->color(
                                        fn(string $state): string =>
                                        $state === 'Nepal' ? 'success' : 'info'
                                    ),

                                TextEntry::make('is_active')
                                    ->label('Status')
                                    ->badge()
                                    ->formatStateUsing(fn(bool $state) => $state ? 'Active' : 'Inactive')
                                    ->color(fn(bool $state) => $state ? 'success' : 'danger'),

                                TextEntry::make('sort_order')
                                    ->label('Sort Order')
                                    ->numeric(),
                            ]),
                    ]),

                Section::make('Photo')
                    ->schema([
                        ImageEntry::make('photo')
                            ->label('Staff Photo')
                            ->circular()
                            ->imageHeight(200)
                            ->imageWidth(200)
                            ->defaultImageUrl(function ($record) {
                                // Default placeholder if no photo
                                return 'https://ui-avatars.com/api/?name=' . urlencode($record->name) . '&background=0D8F81&color=fff&size=200';
                            }),
                    ])
                    ->collapsible(),

                Section::make('Biography')
                    ->schema([
                        TextEntry::make('bio')
                            ->label('Biography')
                            ->html()
                            ->prose()
                            ->columnSpanFull(),
                    ]),

                Section::make('Metadata')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextEntry::make('created_at')
                                    ->label('Created')
                                    ->dateTime('M j, Y g:i A')
                                    ->since(),

                                TextEntry::make('updated_at')
                                    ->label('Last Updated')
                                    ->dateTime('M j, Y g:i A')
                                    ->since(),
                            ]),
                    ])
                    ->collapsible(),
            ]);
    }
}