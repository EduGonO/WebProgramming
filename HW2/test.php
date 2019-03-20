!DOCTYPE html>
<html lang="en">

	<!-- autore Cannizzo Simone -->

	<head>
		<title></title>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="author" content="Simone Cannizzo">
		<link href="./Skeleton2_files/movie.css" type="text/css" rel="stylesheet" />
		<link rel="icon" type="image/png" href="http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/rotten.png">

	</head>

	<body>
		<?php
			#In questa sezione ho dichiarato tutte le variabili globali usate nel sito
			#e ho usato la funzione $_GET pee richiamarer le cartelle dei film
			$movie=$_GET["film"];
			$info=file_get_contents($movie."/info.txt");
			list($nome,$anno,$valutazione)=explode("\n",$info);
			$overviewlist=file($movie."/overview.txt");
			$overviewimg=$movie."/overview.png";
			$freshbig='http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/freshbig.png';
			$rottenbig='http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/rottenbig.png';
			$freshgif='http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/fresh.gif';
			$rottengif='http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/rotten.gif';
			$criticgif='http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/critic.gif';
		 ?>
		<div class="banner">
			<img src="http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/banner.png" alt="Rancid Tomatoes" />
		</div>

		<h1><?=
					#In questo paragrafo gestisco il titolo e l'anno di rilascio del film
					$nome."(".$anno.")";
					?></h1>
		<div class="box1">

      # FOTO Y INFO
			<div class="boxsx">
				<div>
					<img src="<?= $overviewimg #Con quetsa variabile richiamo il path dell'immagine ?>" alt="general overview"/>
				</div>
				<dl id="tabella">
					<?php
						#In questa sezione gestisco la lista delle informazioni sotto l'immagine overview del film
						foreach ($overviewlist as $lista){
							list($dt,$dd)=explode(":",$lista);
							print "<dt>".$dt."</dt>"."<dd>".$dd."</dd>";
						}
					?>
				</dl>
			</div>


			<div class="boxdx">
				<?php
					#In questa sezione ho dichiarato tutte le variabili globali usate nel sito
					#e ho usato la funzione $_GET pee richiamarer le cartelle dei film
					$tot=glob("{$movie}/review*.txt");
					$risultato=count($tot);
					$meta=ceil($risultato/2);
				 ?>
				<div class="titolo">
						<?php
							#Con l'istrzione if gestisco l'immagine del titolo in base al suo rating
							if ($valutazione>=60) {
									echo '<img class="imgtit" src="'.$freshbig.'"alt="freshbig"/>';
							} else {
									echo '<img class="imgtit" src="'.$rottenbig.'"alt="rottenbig"/>';
							}
						?>
					<span><?= $valutazione."%"?></span>
				</div>
				<div class="prima-colonna">
						<?php
							#In questo paragrafo gestisco tutto il blocco delle rrecensioni del film, tra cui il conteggio,
							#la gestione dello spazio e anche la gestione della recensione stessa
							for ($i=1; $i<=$meta; $i++) {
								if (is_file($movie."/review".$i.".txt")==false) {
								 $review = file_get_contents($movie."/review0".$i.".txt");
								}else {
								 $review = file_get_contents($movie."/review".$i.".txt");
								}
							 	list($recensione,$equilibrio,$autore,$sito)=explode("\n",$review);
								if ($equilibrio=="FRESH") {
							?>
						<p class="citazione">
						 	<img src="<?=$freshgif?>" alt="Fresh"/>
						 	<q><?=$recensione?></q>
					 	</p>
					 	<p class="recensione">
						 <img src="<?=$criticgif?>" alt="Critic"/>
						 <span><?=$autore?><br /><?=$sito?></span>
						<?php } else { ?>
						<p class="citazione">
						<img src="<?=$rottengif?>" alt="Rotten"/>
						<q><?=$recensione?></q>
						</p>
						<p class="recensione">
						<img src="<?=$criticgif?>" alt="Critic"/>
						<span><?=$autore?><br /><?=$sito?></span>
						</p>
					<?php	}
						}
					?>
				</div>
				<div class="seconda-colonna">
					<?php
						#In questo paragrafo gestisco tutto il blocco delle rrecensioni del film, tra cui il conteggio,
						#la gestione dello spazio e anche la gestione della recensione stessa
						for ($i=$meta+1; $i<=$risultato; $i++) {
							if (is_file($movie."/review".$i.".txt")==false) {
							 $review = file_get_contents($movie."/review0".$i.".txt");
							}else {
							 $review = file_get_contents($movie."/review".$i.".txt");
							}
							list($recensione,$equilibrio,$autore,$sito)=explode("\n",$review);
							if ($equilibrio=="FRESH") {
						?>
						<p class="citazione">
							<img src="<?=$freshgif?>" alt="Fresh"/>
							<q><?=$recensione?></q>
						</p>
						<p class="recensione">
						 <img src="<?=$criticgif?>" alt="Critic"/>
						 <span><?=$autore?><br /><?=$sito?></span>
						<?php } else { ?>
						<p class="citazione">
						<img src="<?=$rottengif?>" alt="Rotten"/>
						<q><?=$recensione?></q>
						</p>
						<p class="recensione">
						<img src="<?=$criticgif?>" alt="Critic"/>
						<span><?=$autore?><br /><?=$sito?></span>
						</p>
					<?php	}
						}
					?>
					</div>
				</div>
			<div class="pagina">
					<?=
						#Qua gestisco il conteggio delle recensioni
						'<p>(1-'.$risultato.') of '.$risultato.'</p>';
					?>
			</div>
		</div>
		<div class="footer">
			<a href="http://validator.w3.org"><img src="http://www.cs.washington.edu/education/courses/cse190m/11sp/homework/2/w3c-xhtml.png" alt="Validate HTML" /></a> <br />
			<a href="http://jigsaw.w3.org/css-validator"><img src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /></a>
		</div>
	</body>
</html>
