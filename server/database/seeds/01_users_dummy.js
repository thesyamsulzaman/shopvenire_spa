
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "samparker",
          first_name: 'Syamsul', 
          last_name: "Zaman",
          email: "thesyamsulzaman@gmail.com",
          password: "aingsam",
          role: 1,
        },
      ], "id");
    });
};
