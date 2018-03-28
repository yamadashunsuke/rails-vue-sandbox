json.status 200
json.message @result
json.error_messages @user.errors.present? ? @user.errors.full_messages : ""