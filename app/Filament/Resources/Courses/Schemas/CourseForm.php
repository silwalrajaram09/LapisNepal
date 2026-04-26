<?php

namespace App\Filament\Resources\Courses\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;

class CourseForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Basic Information')
                    ->schema([
                        TextInput::make('title')->required(),
                        TextInput::make('slug')->required(),
                        Select::make('category')
                            ->options([
                                'language' => 'Language',
                                'visa' => 'Visa',
                                'internship' => 'Internship'
                            ])->required(),
                        RichEditor::make('description')->required(),
                    ]),
                
                Section::make('Tags')
                    ->schema([
                        Repeater::make('chips')
                            ->schema([
                                TextInput::make('tag')->required()
                            ])
                            ->addActionLabel('Add Tag'),
                    ]),
                
                Section::make('Modules')
                    ->schema([
                        Repeater::make('modules')
                            ->schema([
                                TextInput::make('title')->required(),
                                RichEditor::make('description')->required(),
                            ])
                            ->addActionLabel('Add Module'),
                    ]),
                
                Section::make('Details')
                    ->schema([
                        KeyValue::make('details')
                            ->keyLabel('Property')
                            ->valueLabel('Value')
                            ->addActionLabel('Add Detail'),
                    ]),
                
                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_published')->default(true),
                        TextInput::make('sort_order')->numeric()->default(0),
                    ]),
            ]);
    }
}