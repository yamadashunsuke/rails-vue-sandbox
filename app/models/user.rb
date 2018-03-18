class User < ApplicationRecord
  has_secure_password
  validates :mail_address, presence: true, uniqueness: true
end