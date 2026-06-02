function togglePanel(title, description) {

    const terminal = document.getElementById("terminalOutput");

    terminal.textContent = "";

    const lines = [
        "[+] Initializing security analysis engine...",
        `[+] Loading module: ${title}`,
        "[+] Parsing project data...",
        "[+] Mapping security relevance...",
        "----------------------------------------",
        description,
        "----------------------------------------",
        "[+] Analysis complete",
        "[✓] Ready for next target"
    ];

    let i = 0;

    function printLine() {
        if (i < lines.length) {
            terminal.textContent += lines[i] + "\n";
            i++;
            setTimeout(printLine, 300);
        }
    }

    printLine();
}
