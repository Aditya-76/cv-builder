import jsPDF from 'jspdf';
import '../styles/Download.css'
import html2canvas from 'html2canvas'

export default function Download(){

    function downloadPDF() {
        let capture = document.getElementById('download-resume');
        html2canvas(capture).then(canvas => {
            let imgData = canvas.toDataURL('img/png');
            let doc = new jsPDF('p', 'mm', 'a4');
            let compWidth = doc.internal.pageSize.getWidth();
            let compHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, compWidth, compHeight);
            doc.save('my_resume.pdf')
        })
    }

    return (
        <div className="download" onClick={downloadPDF}>
            Download Resume
        </div>
    )
}