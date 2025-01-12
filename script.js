document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { name: "বই ১", file: "books/book1.pdf" },
        { name: "বই ২", file: "books/book2.pdf" },
        { name: "বই ৩", file: "books/book3.pdf" },
    ];

    const bookList = document.getElementById("bookList");
    const pdfViewer = document.getElementById("pdfViewer");
    const searchBar = document.getElementById("searchBar");

    function displayBooks(filter = "") {
        bookList.innerHTML = "";
        const filteredBooks = books.filter((book) =>
            book.name.includes(filter)
        );
        filteredBooks.forEach((book) => {
            const li = document.createElement("li");
            li.textContent = book.name;
            li.addEventListener("click", () => {
                pdfViewer.src = book.file;
            });
            bookList.appendChild(li);
        });
    }

    searchBar.addEventListener("input", (e) => {
        displayBooks(e.target.value);
    });

    displayBooks();
});
