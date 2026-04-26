<?php

namespace App\Filament\Resources\TimetableEntries;

use App\Filament\Resources\TimetableEntries\Pages\CreateTimetableEntry;
use App\Filament\Resources\TimetableEntries\Pages\EditTimetableEntry;
use App\Filament\Resources\TimetableEntries\Pages\ListTimetableEntries;
use App\Filament\Resources\TimetableEntries\Schemas\TimetableEntryForm;
use App\Filament\Resources\TimetableEntries\Tables\TimetableEntriesTable;
use App\Models\TimetableEntry;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TimetableEntryResource extends Resource
{
    protected static ?string $model = TimetableEntry::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDays;

    protected static ?string $recordTitleAttribute = 'timetable';

    public static function form(Schema $schema): Schema
    {
        return TimetableEntryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TimetableEntriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListTimetableEntries::route('/'),
            'create' => CreateTimetableEntry::route('/create'),
            'edit' => EditTimetableEntry::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
