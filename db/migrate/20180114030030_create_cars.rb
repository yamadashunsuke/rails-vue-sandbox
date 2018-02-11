class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.references :maker,    null: false
      t.string :maker
      t.references :car_model,    null: false
      t.string :car_model
      t.integer :price

      t.timestamps
    end
  end
end
