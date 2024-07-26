<!DOCTYPE html>
<html>
<body>

<button onclick="downloadPage()">Download Page</button>

<script>
function downloadPage() {
    var pageContent = '<html>\n' + document.documentElement.innerHTML + '\n</html>';
    var blob = new Blob([pageContent], {type: 'text/html'});
    var a = document.createElement('a');
    a.download = 'page.html';
    a.href = window.URL.createObjectURL(blob);
    a.click();
}
</script>

</body>
</html>
