using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class kafrating_login : System.Web.UI.Page
{
    string s1 = @"\\sql\www\Rating\upload\", s2 = @"D:\Документы\Rating.net\upload\";
    string[] files;
    bool ExistFile;
   
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (!ExistFile)
        {
            string s1 = @"\\sql\www\Rating\upload\", s2 = @"D:\Документы\Rating.net\upload\";
            string savePath = s2;

            if (FileUpload1.HasFile)
            {
                string filename = FileUpload1.FileName;
                savePath += filename;
                ExistFile = false;
                for (int i = 0; i < files.Length; i++)
                    if (Path.GetFileName(files[i]) == filename)
                    {
                        ExistFile = true;
                        break;
                    }
                if (ExistFile)
                {
                    UploadStatus.Text = "Файл с таким названием уже существует, переименуете?";
                    newFileName.Text = filename;
                    FileUpload1.SaveAs(savePath);
                    UploadStatus.Text = "Файл " + newFileName.Text + " загружен";
                }
                else
                {
                    FileUpload1.SaveAs(savePath);
                    UploadStatus.Text = "Файл " + filename + " загружен";
                }
            }
            else
                UploadStatus.Text = "Не указан файл для загрузки!";
        }
        else
        {

        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        filesList.Items.Clear();
        files = Directory.GetFiles(s2);
        for (int i = 0; i < files.Length; i++)
            filesList.Items.Add(Path.GetFileName(files[i]));
    }
    protected void DeleteFiles_Click(object sender, EventArgs e)
    {

    }
}