<?php

namespace App\Filament\Resources\TimetableEntries\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;

class TimetableEntryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                
                Section::make('Basic Information')
                    ->schema([
                        Grid::make(2)->schema([

                            Select::make('programme')
                                ->label('Programme')
                                ->options([
                                    'japanese' => 'Japanese Language',
                                    'ssw' => 'SSW Curriculum',
                                    'titp' => 'TITP Curriculum',
                                    'internship' => 'Internship',
                                ])
                                ->required()
                                ->native(false),

                            Select::make('level')
                                ->label('Level')
                                ->options([
                                    'N5 foundation' => 'N5 Foundation',
                                    'N4 elementary' => 'N4 Elementary',
                                    'N3 intermediate' => 'N3 Intermediate',
                                    'N2 advanced' => 'N2 Advanced',
                                ])
                                ->required()
                                ->native(false),

                        ]),

                        Select::make('days')
                            ->label('Days')
                            ->options([
                                'sun-fri' => 'Sunday – Friday',
                                'mon-fri' => 'Monday – Friday',
                                'mwf' => 'Mon / Wed / Fri',
                                'tth' => 'Tue / Thu',
                                'weekend' => 'Saturday – Sunday',
                            ])
                            ->required()
                            ->native(false),

                        Grid::make(2)->schema([

                            TimePicker::make('start_time')
                                ->label('Start Time')
                                ->seconds(false)
                                ->required(),

                            TimePicker::make('end_time')
                                ->label('End Time')
                                ->seconds(false)
                                ->required(),

                        ]),
                    ]),

              //shedule details 
                Section::make('Schedule Details')
                    ->schema([
                        Grid::make(2)->schema([

                            TextInput::make('batch_label')
                                ->label('Batch Name')
                                ->placeholder('Morning A, Evening B')
                                ->required()
                                ->maxLength(50),

                            TextInput::make('instructor')
                                ->label('Instructor Name')
                                ->required()
                                ->maxLength(100),

                        ]),

                        Select::make('status')
                            ->label('Class Status')
                            ->options([
                                'open' => 'Open',
                                'filling' => 'Filling',
                                'full' => 'Full',
                            ])
                            ->required()
                            ->native(false),
                    ]),

                //settings 
                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_visible')
                            ->label('Visible on Website')
                            ->default(true),
                    ]),
            ]);
    }
}