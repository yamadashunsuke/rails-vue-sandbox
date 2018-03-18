class User < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :mail_address
      t.string :tel
      t.string :nickname
      t.string :password_digest

      t.timestamps
    end
  end
end