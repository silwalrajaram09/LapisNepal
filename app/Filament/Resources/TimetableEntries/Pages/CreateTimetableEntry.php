<?php

namespace App\Filament\Resources\TimetableEntries\Pages;

use App\Filament\Resources\TimetableEntries\TimetableEntryResource;
use Filament\Resources\Pages\CreateRecord;

class CreateTimetableEntry extends CreateRecord
{
    protected static string $resource = TimetableEntryResource::class;
     protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
