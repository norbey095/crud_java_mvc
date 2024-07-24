function eliminar(id){
	Swal.fire({
	  title: "Estas seguro que desea Eliminar?",
	  text: "",
	  icon: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#3085d6",
	  cancelButtonColor: "#d33",
	  confirmButtonText: "Si"
	})
	.then((result) => {
	  if (result.isConfirmed) {
		$.ajax({
			url:"/eliminar/"+id,
			type: "POST",
			success: function(res){
				console.log(res);
				Swal.fire({
			      title: "Eliminado!",
			      text: "Tu registro fue eliminado correctamente.",
			      icon: "success"
			    }).then((result)=>{
					if(result){
						location.href="/listar";
					}
				});
			}
		});	    
	  } else {
		swal("No se va a eliminar.");
	  }
	});
}