<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'name' => 'Mardini',
            'email' => 'mardini1414@gmail.com',
            'password' => bcrypt('rahasia'),
            'role' => 'admin'
        ]);

        User::insert([
            'name' => 'Ilma Selpiana',
            'email' => 'ilma123@gmail.com',
            'password' => bcrypt('ilma123'),
            'role' => 'user'
        ]);
    }
}
