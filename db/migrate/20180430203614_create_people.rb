class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.integer :age
      t.string :hobby
      t.string :picture

      t.timestamps
    end
  end
end
