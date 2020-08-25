<?php

namespace App\Http\Controllers\Api\Timeline;

use App\Http\Controllers\Controller;
use App\Http\Resources\TweetCollection;

class TimelineController extends Controller
{
    public function index()
    {
        $tweets = \request()->user()
            ->tweetsFromFollowing()
            ->paginate(5);
        return new TweetCollection($tweets);
    }
}
