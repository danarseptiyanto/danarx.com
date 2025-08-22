<?php

namespace App\Filament\Widgets;

use App\Models\Article;
use Filament\Tables\Table;
use Filament\Actions\EditAction;
use Filament\Widgets\TableWidget;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;

class ArticlesTableWidget extends TableWidget
{
    protected int|string|array $columnSpan = 'full';
    public function table(Table $table): Table
    {
        return $table
            ->query(fn(): Builder => Article::query())
            ->columns([
                TextColumn::make('title')
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
