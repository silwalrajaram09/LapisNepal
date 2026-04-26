<?php

namespace App\Filament\Resources\TimetableEntries\Pages;

use App\Filament\Resources\TimetableEntries\TimetableEntryResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Resources\Pages\EditRecord;

class EditTimetableEntry extends EditRecord
{
    protected static string $resource = TimetableEntryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
