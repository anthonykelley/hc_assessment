x = [ 20001, 60045, 20006, 94104, 20005, 10019, 20036, 10022, 19130, 60614, 10024, 30327, 46032, 90210, 10023, 10021, 33301, 20003, 10128 ]
50.times do |n|
  Person.create(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    address: "#{Faker::Address.street_address}, #{x.sample}",
    age: rand(1..100),
    hobby: Faker::Lorem.sentences,
    picture: Faker::Avatar.image
  )
end
puts 'file seeded'