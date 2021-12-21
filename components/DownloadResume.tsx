import axios from "axios";
import { ComponentContainer } from "./layout/Container";
import fileDownload from "js-file-download";

export const DownloadResume = () => {
  const url = "/pdf/lalringzuala-resume.pdf";
  const filename = "lalringzuala-resume.pdf";

  const downloadFile = (url: string, filename: string) => {
    if (url.length === 0) {
      alert("There was a problem with the download, please try again");
    }
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": "attachment",
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      })
      .catch((error) => {
        alert("There was a problem with the download, please try again later");
      });
  };
  return (
    <ComponentContainer>
      <button
        onClick={() => downloadFile(url, filename)}
        className="p-2 w-40 text-center text-white bg-black border-2 border-black md:p-4 md:w-48 hover:text-black hover:bg-white"
      >
        Download Resume
      </button>
    </ComponentContainer>
  );
};
