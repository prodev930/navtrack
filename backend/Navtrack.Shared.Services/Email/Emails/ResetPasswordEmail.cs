namespace Navtrack.Shared.Services.Email.Emails;

public class ResetPasswordEmail(string link, int hours) : IEmail
{
    public string Subject => "[Navtrack] Reset password";

    public string Body => $$"""
                Hello,<br /><br />
                    
                If you requested to reset your password, continue the process by clicking on the link below:<br />            
                <a href="{{link}}">{{link}}</a><br /><br />

                If you don't use the link within {{hours}} hours, it will expire.<br /><br />

                Thanks,<br />
                The Navtrack Team
               """;
}