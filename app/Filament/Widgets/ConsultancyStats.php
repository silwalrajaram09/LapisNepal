<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ConsultancyStats extends BaseWidget
{
    protected static ?int $sort = 2;

    protected function getStats(): array
    {
        return [
            Stat::make('New Enquiries', 5)
                ->description('Pending follow-up')
                ->icon('heroicon-m-envelope')
                ->color('warning'),

            Stat::make('Total Courses', 4)
                ->description('Active programmes')
                ->icon('heroicon-m-academic-cap')
                ->color('info'),

            Stat::make('Total Staff', 10)
                ->description('Teachers & Counselors')
                ->icon('heroicon-m-users')
                ->color('success'),
        ];
    }
}
