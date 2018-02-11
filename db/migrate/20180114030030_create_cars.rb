class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.string :maker
      t.string :model
      t.integer :price

      t.timestamps
    end
  end
end
