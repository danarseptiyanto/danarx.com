<?php

namespace App\Filament\Resources\Articles\Schemas;

use Illuminate\Support\Str;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\MarkdownEditor;

class ArticleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Article Details')
                    ->description('Add your Article details here')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('title'),
                                TextInput::make('slug')
                                    ->required()
                                    ->rule('alpha_dash')
                                    ->afterStateUpdated(
                                        fn($state, callable $set) =>
                                        $set('slug', Str::slug($state)) // Format only when slug is updated manually
                                    ),
                                DateTimePicker::make('date-created'),
                                Select::make('lang')
                                    ->options([
                                        'en' => 'English',
                                        'id' => 'Indonesian',
                                    ])
                                    ->default('en'),
                            ]),
                        FileUpload::make('thumbnail')
                            ->directory('thumbnail')
                            ->disk('public'),
                    ]),
                Section::make('Description')
                    ->description('Add your Article description here')
                    ->collapsible()
                    ->schema([
                        MarkdownEditor::make('description')->columnSpan('full')
                            ->fileAttachmentsDirectory('article')
                            ->fileAttachmentsVisibility('public'),
                    ]),
            ]);
    }
}
