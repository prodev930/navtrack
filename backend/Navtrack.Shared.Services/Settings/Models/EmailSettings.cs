namespace Navtrack.Shared.Services.Settings.Models;

public class EmailSettings
{
    public string SmtpServer { get; set; }
    public string SmtpUsername { get; set; }
    public string SmtpPassword { get; set; }
    public string SmtpFrom { get; set; }
    public int SmtpPort { get; set; }
}