/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    // Users table
    .createTable('users', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('email').unique().notNullable();
      table.string('password_hash').notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.enum('role', ['fan', 'artist', 'manager', 'staff', 'admin']).defaultTo('fan');
      table.string('profile_image');
      table.timestamps(true, true);
    })
    
    // Artists table
    .createTable('artists', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.text('bio');
      table.string('genre');
      table.jsonb('social_links');
      table.timestamps(true, true);
    })
    
    // Events table
    .createTable('events', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('title').notNullable();
      table.text('description');
      table.uuid('artist_id').references('id').inTable('artists').onDelete('CASCADE');
      table.string('location');
      table.boolean('is_virtual').defaultTo(false);
      table.string('virtual_link');
      table.timestamp('start_datetime').notNullable();
      table.timestamp('end_datetime').notNullable();
      table.integer('max_capacity').unsigned();
      table.timestamp('registration_deadline');
      table.enum('status', ['draft', 'published', 'cancelled', 'completed']).defaultTo('draft');
      table.timestamps(true, true);
    })
    
    // Registrations table
    .createTable('registrations', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('event_id').references('id').inTable('events').onDelete('CASCADE');
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.enum('status', ['pending', 'approved', 'rejected', 'waitlisted', 'checked_in', 'no_show']).defaultTo('pending');
      table.timestamp('registration_time').defaultTo(knex.fn.now());
      table.timestamp('check_in_time');
      table.text('notes');
      table.timestamps(true, true);
      
      // Composite unique constraint
      table.unique(['event_id', 'user_id']);
    })
    
    // Time slots table
    .createTable('time_slots', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('event_id').references('id').inTable('events').onDelete('CASCADE');
      table.timestamp('start_time').notNullable();
      table.timestamp('end_time').notNullable();
      table.integer('capacity').unsigned();
      table.timestamps(true, true);
    })
    
    // Slot assignments table
    .createTable('slot_assignments', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('time_slot_id').references('id').inTable('time_slots').onDelete('CASCADE');
      table.uuid('registration_id').references('id').inTable('registrations').onDelete('CASCADE');
      table.timestamps(true, true);
      
      // Unique constraint
      table.unique(['time_slot_id', 'registration_id']);
    })
    
    // Media items table
    .createTable('media_items', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('registration_id').references('id').inTable('registrations').onDelete('CASCADE');
      table.enum('type', ['photo', 'video', 'autograph', 'message']).notNullable();
      table.string('url').notNullable();
      table.boolean('is_shared').defaultTo(false);
      table.timestamps(true, true);
    })
    
    // Feedback table
    .createTable('feedback', table => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('registration_id').references('id').inTable('registrations').onDelete('CASCADE');
      table.integer('rating').unsigned();
      table.text('comments');
      table.timestamps(true, true);
      
      // Unique constraint - one feedback per registration
      table.unique(['registration_id']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('feedback')
    .dropTableIfExists('media_items')
    .dropTableIfExists('slot_assignments')
    .dropTableIfExists('time_slots')
    .dropTableIfExists('registrations')
    .dropTableIfExists('events')
    .dropTableIfExists('artists')
    .dropTableIfExists('users');
};