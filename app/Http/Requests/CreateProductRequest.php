<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:5|max:25',
            'stock' => 'required|numeric',
            'price' => 'required|numeric|min:5000',
            'discounts' => 'required|numeric',
            'category' => 'required',
            'description' => 'required|min:10',
            'image' => 'required|file|image|max:50'
        ];
    }
}
