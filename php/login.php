<?php
session_start();
// $conn = new mysqli("localhost", "root", "", "web1", 3306);

$conn = new mysqli(
  "sql211.infinityfree.com",
  "if0_39076735",
  "Wpb1cLwxdPXU",
  "if0_39076735_web1"
);
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $result = $conn->query("SELECT * FROM users WHERE email='$email'");
  if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
      $_SESSION['user_id'] = $row['id'];
      header("Location: ../html/home.html");
      exit();
    } else {
      $error = "Wrong password.";
    }
  } else {
    $error = "User not found.";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #f2f2f2;
    }
    .container {
      max-width: 400px;
      margin: auto;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-top: 10px;
    }
    input[type="email"],
    input[type="password"] {
      padding: 8px;
      margin-top: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    button {
      margin-top: 15px;
      padding: 10px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #333;
    }
    .links {
      margin-top: 15px;
      text-align: center;
    }
    .error {
      color: red;
      text-align: center;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Login</h2>

    <?php if (!empty($error)): ?>
      <p class="error"><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="POST">
      <label>Email</label>
      <input type="email" name="email" required>

      <label>Password</label>
      <input type="password" name="password" required>

      <button type="submit">Login</button>
    </form>

    <div class="links">
      <p>Don't have an account? <a href="register.php">Register here</a></p>
      <p><a href="../html/home.html">← Go Back</a></p>
    </div>
  </div>

</body>
</html>
