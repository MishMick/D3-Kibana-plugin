export default function(kibana){
    return new kibana.Plugin({
        uiExports:{
            visTypes:[
                'plugins/d3kib/app'
            ]
        }
    });
}