<?php

namespace App\Filament\Resources\Staff\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;

class StaffForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Personal Information')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(function ($state, callable $set) {
                                        // Auto-generate initials from name
                                        $words = explode(' ', trim($state));
                                        $initials = '';
                                        foreach ($words as $word) {
                                            if (!empty($word)) {
                                                $initials .= strtoupper(substr($word, 0, 1));
                                            }
                                        }
                                        $set('initials', substr($initials, 0, 5));
                                    }),
                                
                                TextInput::make('initials')
                                    ->required()
                                    ->maxLength(5)
                                    ->helperText('Auto-generated from name, max 5 characters'),
                            ]),
                        
                        TextInput::make('role')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('e.g., "CEO & Founder", "Lead Instructor"'),
                        
                        Select::make('location')
                            ->options([
                                'Nepal' => 'Nepal',
                                'Japan' => 'Japan',
                            ])
                            ->default('Nepal')
                            ->required()
                            ->native(false),
                        
                        Grid::make(2)
                            ->schema([
                                Toggle::make('is_active')
                                    ->label('Active Status')
                                    ->default(true)
                                    ->helperText('Active staff members appear on the website'),
                                
                                TextInput::make('sort_order')
                                    ->label('Sort Order')
                                    ->numeric()
                                    ->default(0)
                                    ->helperText('Lower numbers appear first'),
                            ]),
                    ]),
                
                Section::make('Photo')
                    ->schema([
                        FileUpload::make('photo')
                            ->label('Staff Photo')
                            ->image()
                            ->imageResizeMode('cover')
                            ->imageCropAspectRatio('1:1')
                            ->imageResizeTargetWidth('500')
                            ->imageResizeTargetHeight('500')
                            ->directory('staff-photos')
                            ->visibility('public')
                            ->maxSize(2048) // 2MB
                            ->helperText('Upload a square photo (recommended size: 500x500px)')
                            ->columnSpanFull(),
                    ]),
                
                Section::make('Biography')
                    ->schema([
                        RichEditor::make('bio')
                            ->label('Staff Biography')
                            ->toolbarButtons([
                                'bold',
                                'italic',
                                'underline',
                                'bulletList',
                                'orderedList',
                                'link',
                                'undo',
                                'redo',
                            ])
                            ->placeholder('Write a detailed biography of the staff member...')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}