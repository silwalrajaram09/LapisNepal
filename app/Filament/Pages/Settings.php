<?php

namespace App\Filament\Pages;

use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use App\Models\Setting;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use Filament\Actions\Action;


class Settings extends Page implements Forms\Contracts\HasForms
{
    use Forms\Concerns\InteractsWithForms;

    protected string $view = 'filament.pages.settings';
    protected static ?string $title = 'Application Settings';
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedAdjustmentsHorizontal;

    protected static ?string $navigationLabel = 'Settings';
    protected static ?int $navigationSort = 999;

    public ?array $data = [];

    public function mount(): void
    {
        $settings = Setting::firstOrNew();

        $this->data = [
            'site_name' => $settings->site_name ?? config('app.name'),
            'site_description' => $settings->site_description ?? '',
            'contact_email' => $settings->contact_email ?? config('mail.from.address'),
            'contact_phone' => $settings->contact_phone ?? '',
            'address' => $settings->address ?? '',
            'facebook_url' => $settings->facebook_url ?? '',
            'twitter_url' => $settings->twitter_url ?? '',
            'instagram_url' => $settings->instagram_url ?? '',
            'maintenance_mode' => $settings->maintenance_mode ?? false,
            'logo' => $settings->logo ?? null,
            'favicon' => $settings->favicon ?? null,
        ];
    }

    public function form(Schema $form): Schema
    {
        return $form
            ->schema([
                Section::make('General Settings')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('site_name')
                                    ->label('Site Name')
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('contact_email')
                                    ->label('Contact Email')
                                    ->email()
                                    ->required()
                                    ->maxLength(255),

                                TextInput::make('contact_phone')
                                    ->label('Contact Phone')
                                    ->tel()
                                    ->maxLength(255),

                                TextInput::make('address')
                                    ->label('Address')
                                    ->maxLength(500)
                                    ->columnSpanFull(),

                                RichEditor::make('site_description')
                                    ->label('Site Description')
                                    ->toolbarButtons(['bold', 'italic', 'link'])
                                    ->columnSpanFull(),
                            ]),
                    ]),

                Section::make('Social Media Links')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('facebook_url')
                                    ->label('Facebook URL')
                                    ->url()
                                    ->maxLength(255),

                                TextInput::make('twitter_url')
                                    ->label('Twitter/X URL')
                                    ->url()
                                    ->maxLength(255),

                                TextInput::make('instagram_url')
                                    ->label('Instagram URL')
                                    ->url()
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                            ]),
                    ]),

                Section::make('Branding')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                FileUpload::make('logo')
                                    ->label('Site Logo')
                                    ->image()
                                    ->directory('settings')
                                    ->maxSize(1024)
                                    ->automaticallyCropImagesToAspectRatio('200')
                                    ->helperText('Upload a logo (max 1MB)'),

                                FileUpload::make('favicon')
                                    ->label('Favicon')
                                    ->image()
                                    ->directory('settings')
                                    ->maxSize(512)
                                    ->automaticallyResizeImagesToWidth('32')
                                    ->automaticallyResizeImagesToHeight('32')
                                    ->helperText('Upload a favicon (max 512KB)'),
                            ]),
                    ]),

                Section::make('System Settings')
                    ->schema([
                        Toggle::make('maintenance_mode')
                            ->label('Maintenance Mode')
                            ->helperText('When enabled, only admins can access the site')
                            ->default(false),
                    ]),
            ])
            ->statePath('data');
    }
protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Save Settings')
                ->submit('save')
                ->color('primary'),
        ];
    }
    public function save(): void
    {
        $data = $this->form->getState();

        Setting::updateOrCreate(['id' => 1], $data);

        cache()->forever('site_settings', $data);

        Notification::make()
            ->title('Settings saved successfully')
            ->success()
            ->send();
    }
    
}
