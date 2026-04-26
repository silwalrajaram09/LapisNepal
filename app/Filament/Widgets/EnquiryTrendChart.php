<?php

namespace App\Filament\Widgets;

use App\Models\Enquiry;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class EnquiryTrendChart extends ChartWidget
{
    protected ?string $heading = 'Enquiry Trends (Last 7 Days)';
    protected static ?int $sort = 2;

    protected function getData(): array
    {
        // Fetch enquiry counts grouped by date for the last 7 days
        $data = Enquiry::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as aggregate'))
            ->where('created_at', '>=', now()->subDays(7))
            ->groupBy('date')
            ->orderBy('date')
            ->pluck('aggregate', 'date')
            ->toArray();

        return [
            'datasets' => [
                [
                    'label' => 'Daily Enquiries',
                    'data' => array_values($data),
                    'fill' => 'start',
                    'borderColor' => '#3b82f6',
                    'backgroundColor' => 'rgba(59, 130, 246, 0.1)',
                ],
            ],
            'labels' => array_keys($data),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
