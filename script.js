function downloadPDF() {
    // const fileName =  

    // if (fileName.trim() === "") {
    //     alert("Please enter a valid PDF filename.");
    //     return;
    // }

    const pdfPath = `pdfs/${pdfFileName}.pdf`;

    // Check if the PDF file exists
    fetch(pdfPath)
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("PDF not found.");
        //     }
        //     return response.blob();
        // })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName + ".pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            alert(error.message);
        });
}