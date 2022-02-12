var filtro = document.getElementById('filtro-palavra');
var tabela = document.getElementById('lista');
filtro.onkeyup = function () {
    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro.toLowerCase()) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};
var filtrofone = document.getElementById('filtro-clientes');
filtrofone.onkeyup = function () {
    var nomeFiltroFone = filtrofone.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelulaFone = tabela.rows[i].cells[1].innerText;
        var correspondeFone = conteudoCelulaFone.toLowerCase().indexOf(nomeFiltroFone.toLowerCase()) >= 0;
        tabela.rows[i].style.display = correspondeFone ? '' : 'none';
    }
};
var filtrocriacao = document.getElementById('filtro-criacao');
filtrocriacao.onkeyup = function () {
    var nomeFiltroCriacao = filtrocriacao.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelulaCriacao = tabela.rows[i].cells[2].innerText;
        var correspondeCriacao = conteudoCelulaCriacao.indexOf(nomeFiltroCriacao) >= 0;
        tabela.rows[i].style.display = correspondeCriacao ? '' : 'none';
    }
};
var filtrocancel = document.getElementById('filtro-cancel');
filtrocancel.onkeyup = function () {
    var nomeFiltroCancel = filtrocancel.value;
    for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelulaCancel = tabela.rows[i].cells[3].innerText;
        var correspondeCancel = conteudoCelulaCancel.indexOf(nomeFiltroCancel) >= 0;
        tabela.rows[i].style.display = correspondeCancel ? '' : 'none';
    }
};
