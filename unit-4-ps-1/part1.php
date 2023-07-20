<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Unit 4 PS 1</title>
    </head>
    <body>
        <h1>Unit 4 PS 1</h1>
        <form action="times_table.php" method="get">
            <label for="n">Enter a number from 1 to 12:</label>
            <input type="number" name="n" min="1" max="12" required>
            <button type="submit">Create Times Table</button>
        </form>

        <?php
        if (isset($_GET['n'])) {
            $n = intval($_GET['n']);
            $n = max(1, $n);
    
            echo "<ul>";
            for ($i = 1; $i <= 12; $i++) {
                $result = $i * $n;
                echo "<li>$i x $n = $result</li>";
            }
            echo "</ul>";
        } 
        ?> 
    </body>

</html>