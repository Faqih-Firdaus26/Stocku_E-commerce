<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shipping extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'tracking_number',
        'courier',
        'estimated_delivery',
        'status'
    ];

    protected $casts = [
        'estimated_delivery' => 'date',
        'status' => 'string'
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
} 