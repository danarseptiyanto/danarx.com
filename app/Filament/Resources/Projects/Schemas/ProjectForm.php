<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\MarkdownEditor;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Project Details')
                    ->description('Add your project details here')
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
                                TextInput::make('project-date'),
                                DateTimePicker::make('date-created'),
                                TextInput::make('client'),
                                TextInput::make('website'),
                            ]),
                        FileUpload::make('thumbnail')
                            ->directory('thumbnail')
                            ->disk('public'),
                    ]),
                Section::make('Description')
                    ->description('Add a description for the project')
                    ->collapsible()
                    ->schema([
                        MarkdownEditor::make('description')->columnSpan('full')
                            ->fileAttachmentsDirectory('project')
                            ->fileAttachmentsVisibility('public'),
                    ]),
                Section::make('Images & Screenshot')
                    ->description('Add images and screenshots for the project')
                    ->collapsible()
                    ->schema([
                        FileUpload::make('images')
                            ->multiple()
                            ->directory('images')
                            ->disk('public')
                            ->reorderable()
                            ->appendFiles(),
                    ])
            ]);
    }
}
