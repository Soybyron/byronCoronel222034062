using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using solicitud_API;

namespace api_solicitud_de_vacaciones.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersControler : Controller
    {
        private readonly string _connectionString = "Server=DESKTOP-0SS41UT\\BYRON;Database=formulario_db;User Id=sa;Password=SANBERNARDO1;TrustServerCertificate=true;";

        [HttpPost("register")]

        public IActionResult Register([FromBody] FormularioClass user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data");
            }
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var sql = "insert into formulario_usuarios(firstName,lastName,email, phone,directName,directEmail,beginDate,endDate,textEdit) values (@firstName,@lastName,@email, @phone,@directName,@directEmail,@beginDate,@endDate,@textEdit)";
                var rowAffected = connection.Execute(sql, new { user.firstName , user.lastName, user.email, user.phone, user.directName, user.directEmail, user.beginDate, user.endDate, user.textEdit });


                if (rowAffected > 0)
                {
                    return Ok("User registered successfully.");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user.");
                }
            }
        }

        [HttpPost("validation")]
        public IActionResult Validation([FromBody] Validacion user)
        {
            if (user ==null)
            {
                return BadRequest("Invalid user data");
            }

            using  (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var sql = "select * from formulario_usuarios where lastName=@lastName and email=@email;";
                var result = connection.QuerySingleOrDefault<Validacion>(sql, new { user.lastName, user.email });

                if (result != null)
                {
                    return Ok("User found");
                }
                else
                {
                    return Unauthorized("Invalid credentials");
                }
            }
        }
    }

}

