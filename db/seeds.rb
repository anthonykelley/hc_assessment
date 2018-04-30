50.times do |n|
  Person.create(
  first_name: Faker::Name.unique.first_name,
  last_name: Faker::Name.unique.last_name,
  address: Faker::Address.street_address,
  age: rand(1..100),
  hobby: Faker::Lorem.sentences,
  picture: Faker::Avatar.image
  )
end
puts 'file seeded'