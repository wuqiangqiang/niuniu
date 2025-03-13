<?php


namespace Portal\Controller;

require_once COMMON_PATH.'Lib/PHPThumb/PHPThumb.php';
require_once COMMON_PATH.'Lib/PHPThumb/GD.php';
require_once COMMON_PATH.'Lib/ZebraImage.lib.php';

use PHPThumb as PHPThumb;

class ThumbController
{

    public function index() {
        $this->gd( urldecode(I('url')), 80, 80 );
    }
    /**
     * 如需使用等比例缩放 请用get方式传入参数 equal=y
     * @param $filename
     */
    public function gd( $url, $width, $height ) {
        $file_cache = DATA_PATH . 'avatar' . "/{$width}_{$height}/".md5($url);
        $file       = $url;

        try {
            if( file_exists( $file_cache ) ) {
                //$this->_header( $filename );
                $type = getimagesize($file_cache);
                header('Content-type: '.$type['mime']);
                echo file_get_contents( $file_cache );
            } else {
                mkdirs( dirname( $file_cache ) );
                file_put_contents($file_cache, file_get_contents($url));
                $thumb  = new PHPThumb\GD($file_cache);
                if( 1 == 'y' ){
                    $thumb->resize($width, $height);
                }
                else {
                    $thumb->adaptiveResize($width, $height);
                }
                if( ( ! empty( $width ) || ! empty( $height ) ) ) {
                    $content = $thumb->getImageAsString();
                    file_put_contents( $file_cache, $content );
                    //$this->_header( $url );
                    if( file_exists( $file_cache ) ) {
                        //$this->sy($file_cache);
                        echo file_get_contents($file_cache);
                    }
                    else {
                        echo $content;
                    }
                } else {
                    $thumb->show();
                }
            }
        } catch( Exception $e ) {}
    }

    protected function sy( $dst_path ) {
        $src_path = ROOT . 'public/boss/images/watermark.png';
        list($src_w, $src_h) = getimagesize($src_path);
        list($dst_w, $dst_h, $dst_type) = getimagesize($dst_path);
        if( $dst_w > $src_w && $dst_h > $src_h ) {
            $dst = imagecreatefromstring(file_get_contents($dst_path));
            $src = imagecreatefromstring(file_get_contents($src_path));
            imagecopy($dst, $src, $dst_w - $src_w, $dst_h - $src_h, 0, 0, $src_w, $src_h);
            switch ($dst_type) {
                case 1://GIF
                    imagegif($dst, $dst_path);
                    break;
                case 2://JPG
                    imagejpeg($dst, $dst_path, 100);
                    break;
                case 3://PNG
                    imagepng($dst, $dst_path);
                    break;
                default:
                    break;
            }
            imagedestroy($dst);
            imagedestroy($src);
        }
    }

    protected function _header( $filename ) {
        $arr = explode( '.', $filename );
        switch( $arr[1] ) {
            case 'gif':
                header('Content-type: image/gif');
                break;
            case 'jpg':
                header('Content-type: image/jpeg');
                break;
            case 'png':
                header('Content-type: image/png');
        }
    }
}

function mkdirs($dir) {
    if( ! is_dir( $dir ) )	{
        if( ! mkdirs( dirname($dir) ) ) {
            return false;
        }
        if( ! mkdir($dir,0777) ) {
            return false;
        }
    }
    return true;
}