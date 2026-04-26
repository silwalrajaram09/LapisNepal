<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use App\Filament\Widgets\ConsultancyStats;
use App\Filament\Widgets\EnquiryTrendChart;

class Dashboard extends BaseDashboard
{
    public function getWidgets(): array
    {
        return [
            ConsultancyStats::class,
            EnquiryTrendChart::class,
        ];
    }
}
