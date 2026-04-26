<?php

namespace App\Filament\Resources\TimetableEntries\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Toggle;

class TimetableEntryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Basic Information')
                    ->schema([
                        Select::make('programme')
                            ->options([
                                'Japanese language' => 'Japanese language',
                                'SSW' => 'SSW',
                                'TITP' => 'TITP',
                                'Internship' => 'Internship',
                            ])->required(),
                        Select::make('level')
                            ->options([
                                '1' => 'Level 1',
                                '2' => 'Level 2',
                                '3' => 'Level 3',
                                '4' => 'Level 4',
                                '5' => 'Level 5',
                                '6' => 'Level 6',
                                '7' => 'Level 7',
                                '8' => 'Level 8',
                            ])->required(),
                        Select::make('days')
                            ->options([
                                'Monday' => 'Monday',
                                'Tuesday' => 'Tuesday',
                                'Wednesday' => 'Wednesday',
                                'Thursday' => 'Thursday',
                                'Friday' => 'Friday',
                                'Saturday' => 'Saturday',
                                'Sunday' => 'Sunday',
                                'Mon/Wed/Fri' => 'Mon/Wed/Fri (MWF)',
                                'Tue/Thu' => 'Tue/Thu (TTH)',
                                'Mon-Fri' => 'Monday - Friday',
                            ])->required(),
                        TimePicker::make('time')->required(),
                    ]),
                
                Section::make('Schedule Details')
                    ->schema([
                        TextInput::make('batch_label')->required(),
                        TextInput::make('instructor')->required(),
                        Select::make('status')
                            ->options([
                                'open' => 'Open',
                                'filling' => 'Filling',
                                'full' => 'Full'
                            ])->required(),
                    ]),
                
                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_visible')->default(true),
                    ]),
            ]);
    }
}