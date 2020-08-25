<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TweetCollection extends ResourceCollection
{
    public $collects = TweetResource::class;

    public function toArray($request): array
    {
        return [
            'data' => $this->collection
        ];
    }
}
