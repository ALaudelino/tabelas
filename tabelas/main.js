 <script type="text/javascript">


 window.onload=function(){
    var filtro = document.getElementById('filtro-nome');
    var tabela = document.getElementById('tabela');
        var nomeFiltro = filtro.value;
        for (var i = 1; i < tabela.rows.length; i++) {
            var conteudoCelula = tabela.rows[i].cells[0].innerText;
            var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
            tabela.rows[i].style.display = corresponde ? '' : 'none';
        }
    }
}

</script>