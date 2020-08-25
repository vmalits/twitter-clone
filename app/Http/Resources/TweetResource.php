<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TweetResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'user' => new UserResource($this->user)
        ];
    }
}
